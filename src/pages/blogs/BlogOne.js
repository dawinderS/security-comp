import React, {useEffect} from 'react';
import getPostData from '../../components/post/PostTypeOneData.json';
import PostTypeOne from '../../components/post/PostTypeOne';
import Layout from '../../common/Layout';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';

const BlogOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers | Regency Security Group</title>
        <meta name="description" content="Regency Security Group" />
        <meta
          name="keywords"
          content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security"
        />
      </Helmet>
      <Layout>
        <Breadcrumb
          pageTitle="Our Job Openings"
          rootPath="/"
          parentPath="Home"
          currentPath="Careers"
        />
        {/* post Section Start */}
        <div className="blog-sec pt-100 pb-80">
          <div className="container">
            <div className="row">
              {/* {getPostData.map((item) => (
                <PostTypeOne key={item.id} data={item} />
              ))} */}
              <p className='careers-placeholder'>We currently have no open positions. But if you feel like you could provide something of value, please get in touch with us through our contact form. </p>
            </div>
          </div>
        </div>
        {/* post Section End */}
      </Layout>
    </>
  );
};

export default BlogOne;
