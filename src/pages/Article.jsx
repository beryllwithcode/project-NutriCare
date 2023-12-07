import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <motion.img
        src="illustration/article.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
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
            <Typography variant="h1" className="mb-4 max-w-lg">
              Welcome to{" "}
              <span className="text-nutricare-orange">NutriCare Article</span>
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
              <a href="#articles">
                <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                  Scroll Down
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticlesData = () => {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Body Mass Index&api-key=FYRej47F7peEopmAzuL72D3zkpUxkYxB"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.response && data.response.docs) {
          setArticles(data.response.docs);
        } else {
          // Handle the case where docs is undefined or null
          console.error("Error fetching articles data:", data);
          // You might want to set articles to an empty array or show an error message
          setArticles([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles data:", error);
        // Handle the error, for example, set articles to an empty array or show an error message
        setArticles([]);
      })
      .finally(() => {
        // Set loading to false when the API call is complete
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchArticlesData();
  }, []);
  const scrollRef = useRef(null);
  return (
    <div
      className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green"
      id="articles"
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
        className="max-w-md lg:max-w-3xl mx-auto my-8"
      >
        <Typography variant="h1" className="mb-2">
          <span className="text-nutricare-orange">NutriCare</span> Articles
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Explore a wealth of knowledge on{" "}
          <span className="text-nutricare-orange">NutriCare's article</span>{" "}
          hub, covering topics ranging from{" "}
          <span className="text-nutricare-orange">healthy lifestyles</span> to{" "}
          <span className="text-nutricare-orange">nutritious foods</span>.
          Enhance your well-being by staying informed about the latest trends
          and tips for a healthier life.
        </Typography>
      </motion.div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{
            delay: 0.25,
            duration: 0.75,
            type: "spring",
            stiffness: 150,
          }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-y-4"
          role="article"
        >
          {articles.map((article) => (
            <Card
              key={article.headline.main}
              className="w-64 shadow-lg"
              role="article"
            >
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  {article.headline.main}
                </Typography>
                <Typography>
                  {article.lead_paragraph?.slice(0, 100) + "..." || "-"}
                </Typography>
              </CardBody>
              <CardFooter className="pt-2 bottom-0">
                <a href={article.web_url} target="blank">
                  <Button
                    size="lg"
                    className="bg-nutricare-green hover:bg-nutricare-orange"
                    fullWidth={true}
                  >
                    Read More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export const Article = () => {
  return (
    <>
      <Hero />
      <Articles />
    </>
  );
};

export default Article;
