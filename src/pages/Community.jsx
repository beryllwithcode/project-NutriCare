import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <motion.img
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        src="illustration/rafiki.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      />
      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{
            delay: 0.25,
            duration: 0.75,
            type: "spring",
            stiffness: 150,
          }}
        >
          <div>
            <Typography variant="h1" className="mb-4">
              Welcome to NutriCare's{" "}
              <span className="text-nutricare-orange">Community</span>
            </Typography>
          </div>
          <div>
            <Typography variant="paragraph" className="text-lg">
              NutriCare's{" "}
              <span className="text-nutricare-orange">Health Articles</span>{" "}
              Hub, your go-to resource for a holistic approach to well-being.
              Immerse yourself in a diverse collection of articles meticulously
              crafted to empower you on your journey to a{" "}
              <span className="text-nutricare-orange">healthier lifestyle</span>
              .
            </Typography>
          </div>
          <div>
            <div className="mt-4 gap-x-6">
              <a href="#discussion">
                <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Content = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeunload", clearLocalStorage);

    const storedDiscussions = localStorage.getItem("discussions");
    if (storedDiscussions) {
      setDiscussions(JSON.parse(storedDiscussions));
    } else {
      // If not, fetch discussions from Supabase
      fetchDiscussions();
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    // Clear localStorage on page refresh
    localStorage.removeItem("discussions");
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleNewDiscussion = async (event) => {
    event.preventDefault();

    try {
      const { error } = await supabase.from("discussion").insert({
        id_user: session.user.id,
        title,
        description,
      });

      if (error) {
        console.error(error);
      } else {
        alert("Discussion created!");
        setOpen(false);
        fetchDiscussions();
      }
    } catch (error) {
      console.error("Error creating discussion:", error.message);
    }
  };

  function formatDiscussionDate(created_at) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(created_at).toLocaleDateString("en-US", options);
  }

  const [discussions, setDiscussions] = useState([]);

  const fetchDiscussions = async () => {
    try {
      const { data: discussionsData, error: discussionsError } = await supabase
        .from("discussion")
        .select(
          `
            id,
            created_at,
            id_user,
            profiles (id, full_name),
            title,
            description
          `
        )
        .order("created_at", { ascending: false });

      if (discussionsError) {
        throw discussionsError;
      }

      const discussionsWithCounts = await Promise.all(
        discussionsData.map(async (discussion) => {
          const { data: commentsData, error: commentsError } = await supabase
            .from("discussion_replies")
            .select("id")
            .eq("id_discussion", discussion.id);

          if (commentsError) {
            throw commentsError;
          }

          return {
            ...discussion,
            created_at: formatDiscussionDate(discussion.created_at),
            commentCount: commentsData ? commentsData.length : 0,
          };
        })
      );

      setDiscussions(discussionsWithCounts || []);
      localStorage.setItem(
        "discussions",
        JSON.stringify(discussionsWithCounts)
      );
    } catch (error) {
      console.error("Error fetching discussions:", error.message);
    }
  };

  // useEffect(() => {
  //   fetchDiscussions();
  // },);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const scrollRef = useRef(null);
  return (
    <div
      className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green"
      id="discussion"
    >
      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="w-screen"
      >
        <div className="flex justify-between items-center mb-5 pb-4 border-b-4">
          <div className="w-40 lg:w-full">
            <Typography variant="h3">Let's Discuss</Typography>
            <Typography variant="paragraph">
              Discuss anything, ask questions, find supports, and connect with
              others.
            </Typography>
          </div>
          <Button
            onClick={handleOpen}
            disabled={session ? false : true}
            className="bg-nutricare-green w-32 lg:w-100 h-full"
          >
            New Discussion
          </Button>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="p-5 border-2 rounded-lg flex items-center justify-between"
            >
              <div className="w-52 lg:w-full">
                <Link to={`/discussion/${discussion.id}`}>
                  <Typography variant="h5">{discussion.title}</Typography>
                </Link>
                <div className="flex gap-4 lg:gap-8">
                  <Typography variant="paragraph" className="text-gray-500">
                    Post by{" "}
                    <span className="text-nutricare-orange">
                      {discussion.profiles.full_name}
                    </span>
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-500">
                    {discussion.created_at}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row text-nutricare-greenTuaFade">
                <div className="flex gap-2 items-center">
                  <img src="/icons/chat-fade.svg" alt="" className="w-5" />
                  <Typography>{discussion.commentCount}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="pb-0">
          <div>
            <Typography variant="h4" className="text-nutricare-green">
              Create{" "}
              <span className="text-nutricare-orange">New Discussion</span>
            </Typography>
            <Typography
              className=" font-normal text-nutricare-green"
              variant="paragraph"
            >
              Enter details for the discussion.
            </Typography>
          </div>
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleNewDiscussion} className="flex flex-col gap-4">
            <Input
              label="Title"
              color="green"
              required
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
            />
            <Textarea
              label="Description"
              color="green"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
            <Button type="submit" className="bg-nutricare-green" fullWidth>
              Create
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

function Community() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}

export default Community;
