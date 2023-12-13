import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const DiscussionDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { id } = useParams();
  const [dataFetched, setDataFetched] = useState(false);

  function formatDiscussionDate(created_at) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(created_at).toLocaleDateString("en-US", options);
  }

  const formatRepliesDate = (replies) => {
    return replies.map((reply) => ({
      ...reply,
      created_at: formatDiscussionDate(reply.created_at),
    }));
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const [comment, setComment] = useState("");
  const [warning, setWarning] = useState("");

  const newCommentHandler = async (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      setWarning("Comment cannot be empty!");
      return;
    }

    try {
      const { error } = await supabase.from("discussion_replies").insert({
        id_user: session.user.id,
        reply: comment,
        id_discussion: id,
      });

      if (error) {
        console.error(error);
      } else {
        alert("Your comment posted!");
        setWarning("");
        fetchDiscussions();
        setComment("");
      }
    } catch (error) {
      console.error("Error posting comment:", error.message);
    }
  };

  const [discussion, setDiscussion] = useState([]);
  const [replies, setReplies] = useState([]);
  const navigate = useNavigate();

  const fetchDiscussions = async () => {
    try {
      const { data: discussionsData, error: discussionsError } = await supabase
        .from("discussion")
        .select(`
          id,
          created_at,
          id_user,
          profiles (id, full_name),
          title,
          description
        `)
        .eq("id", id)
        .single();

      if (discussionsError) {
        throw discussionsError;
      }

      const { data: repliesData, error: repliesError } = await supabase
        .from("discussion_replies")
        .select(`
          *,
          profiles (id, full_name)
        `)
        .eq("id_discussion", id)
        .order("created_at", { ascending: false });

      if (repliesError) {
        throw repliesError;
      }

      setDiscussion({
        ...discussionsData,
        created_at: formatDiscussionDate(discussionsData.created_at),
        profiles: discussionsData.profiles,
      });

      setReplies(formatRepliesDate(repliesData || []));
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching discussions:", error.message);
    }
  };

  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    if (!dataFetched) {
      fetchDiscussions();
    }
  }, [dataFetched, fetchDiscussions, id]);

  const deleteDiscussionHandler = async () => {
    setDeleteLoading(true);
    try {
      const { error } = await supabase
        .from("discussion_replies")
        .delete()
        .eq("id_discussion", id);

      if (error) {
        console.error("Error deleting discussion:", error.message);
      } else {
        const { error } = await supabase
          .from("discussion")
          .delete()
          .eq("id", id);
        if (error) {
          console.error("Error deleting discussion:", error.message);
        } else {
          localStorage.removeItem("discussions");
          setDeleteLoading(false);
          navigate("/community");
        }
      }
    } catch (error) {
      console.error("Error handling delete discussion:", error.message);
    }
  };

  const [editComment, setEditComment] = useState({ id: null, editing: false, value: "" });

  const editCommentHandler = (commentId, currentComment) => {
    // Toggle the editing mode
    setEditComment({
      id: commentId,
      editing: !editComment.editing,
      value: currentComment,
    });
  };

  const saveChangesHandler = async (commentId) => {
    try {
      const { error } = await supabase
        .from("discussion_replies")
        .update({ reply: editComment.value })
        .eq("id", commentId);

      if (error) {
        console.error("Error updating comment:", error.message);
      } else {
        alert("Your comment has been updated!");
        setEditComment({ id: null, editing: false, value: "" });
        fetchDiscussions();
      }
    } catch (error) {
      console.error("Error editing comment:", error.message);
    }
  };

  const deleteCommentHandler = async (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        const { error } = await supabase
          .from("discussion_replies")
          .delete()
          .eq("id", commentId);

        if (error) {
          console.error("Error deleting comment:", error.message);
        } else {
          alert("Your comment has been deleted!");
          fetchDiscussions();
        }
      } catch (error) {
        console.error("Error deleting comment:", error.message);
      }
    }
  };

  if (!discussion) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green"
      id="discussion"
    >
      <div className="mx-auto w-72 lg:w-screen lg:max-w-6xl">
        <div className="flex justify-between items-center pb-4">
          <div className="w-full max-w-full">
            <div className="flex justify-between">
              <div>
                <Typography
                  variant="h3"
                  className="break-all w-72 lg:w-full max-w-4xl break-words"
                >
                  {discussion.title || "-"}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 max-w-4xl break-words"
                >
                  {discussion.description || "-"}
                </Typography>
              </div>
              {session &&
                session.user &&
                session.user.id === discussion.id_user && (
                  <>
                    <div className="hidden lg:block py-2">
                      <Button
                        onClick={handleOpen}
                        className="bg-nutricare-orange hover:bg-red-500"
                      >
                        Delete Discussion
                      </Button>
                    </div>
                    <Menu className="lg:hidden" placement="left-start">
                      <MenuHandler>
                        <i className="fas fa-ellipsis-v px-1 py-2 lg:hidden"></i>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem className="text-red-500" onClick={handleOpen}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                )}
            </div>
            <div className="flex gap-4 lg:gap-8">
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                by{" "}
                <span className="text-nutricare-orange">
                  {discussion.profiles?.full_name
                    ? discussion.profiles.full_name
                    : "-"}
                </span>
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                {discussion.created_at || "Jan 0, 0000"}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                {replies.length || "0"} Comments
              </Typography>
            </div>
          </div>
        </div>
        <div className="mb-8">
          {/* Displays a warning message */}
          {warning && (
            <div className="text-nutricare-merah mb-2">{warning}</div>
          )}

          <form onSubmit={newCommentHandler}>
            <div className="w-100">
              <Textarea
                color="green"
                disabled={session ? false : true}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                label="Comment"
              />
            </div>
            <Button
              type="submit"
              disabled={session ? false : true}
              className="bg-nutricare-green hover:bg-nutricare-orange mt-2"
            >
              Post Comments
            </Button>
          </form>
        </div>
        <div>
          <div className="w-100 mb-4">
            <Typography variant="h4">
              {replies.length || "0"} Comments
            </Typography>
          </div>
          <div className="flex flex-col gap-8">
            {replies.map((reply) => (
              <div className="flex flex-col gap-2" key={reply.id}>
                <div className="flex gap-4 lg:gap-8">
                  <Typography
                    variant="paragraph"
                    className="text-nutricare-green font-semibold"
                  >
                    <span className="text-nutricare-orange">
                      {reply.profiles.full_name || "User"}
                    </span>
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-nutricare-green font-semibold"
                  >
                    {reply.created_at || "Jan 0, 0000"}
                  </Typography>
                  {session && session.user && session.user.id === reply.id_user && (
                    <>
                      <i
                        onClick={() => editCommentHandler(reply.id, reply.reply)}
                        className="fas fa-edit cursor-pointer text-nutricare-orange hover:text-nutricare-red"
                      ></i>
                      <i
                        onClick={() => deleteCommentHandler(reply.id)}
                        className="fas fa-trash-alt cursor-pointer text-nutricare-red hover:text-red-500"
                      ></i>
                    </>
                  )}
                </div>
                <div className="commentContainer">
                  {/* Conditionally render either the original or edited comment */}
                  <Typography variant="paragraph" className="commentText">
                    {editComment.id === reply.id ? (
                      // Render input for editing comment
                      <div className="flex gap-2">
                        <Textarea
                          color="green"
                          onChange={(e) =>
                            setEditComment({
                              ...editComment,
                              value: e.target.value,
                            })
                          }
                          value={editComment.value}
                          label="Edit Comment"
                        />
                        <Button
                          onClick={() => saveChangesHandler(reply.id)}
                          className="bg-nutricare-green hover:bg-nutricare-orange"
                        >
                          <i className="fas fa-save"></i>
                        </Button>
                      </div>
                    ) : (
                      // Render original comment
                      reply.reply || "-"
                    )}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader className="pb-2">Delete</DialogHeader>
        <DialogBody className="py-0">
          Are you sure you want to delete this discussion?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={deleteDiscussionHandler}
            disabled={deleteLoading}
          >
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DiscussionDetail;
