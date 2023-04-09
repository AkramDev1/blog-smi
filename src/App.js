import React from "react";
import {
  ArticleCard,
  ArticleDetail,
  ArticleWidget,
  Categories,
  CommentsForm,
} from "./components";
import { FeaturedArticles } from "./sections";

function App() {
  return (
    // <Box sx={{ mx: "auto", px: 10, mb: 8 }}>
    //   <FeaturedArticles />
    //   <Grid container spacing={12}>
    //     <Grid item xs={12} lg={8}>
    //       {/* {posts.map((post, index) => ( */}
    //         {/* <PostCard key={index} post={post.node} /> */}
    //         {/* <ArticleCard />
    //         <ArticleCard />
    //         <ArticleCard /> */}

    //         <ArticleDetail />
    //         <CommentsForm />

    //       {/* ))} */}
    //     </Grid>
    //     <Grid item xs={12} lg={4}>
    //       <Box sx={{ position: { lg: "sticky", xs: "relative"}, top: "2rem" }}>
    //         <ArticleWidget />
    //         <Categories />
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>

    <div>
      <FeaturedArticles />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post, index) => ( */}
          {/* <PostCard key={index} post={post.node} /> */}
          <ArticleDetail /> <CommentsForm />
          {/* ))} */}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
