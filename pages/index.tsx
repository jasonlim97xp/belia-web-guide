import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import AutofitGrid from 'components/AutofitGrid';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <HeroContainer>
            <Hero />
          </HeroContainer>

          <BasicSection
            imageUrl="/campsite.jpeg"
            overTitle="Here are some of the key information that you should know"
            title="Important Info"
          >
            <p>
              <b>Date: </b>27, 28, 29, 30 January 2023
            </p>
            <p>
              <b>Location: </b> Kampung Idaman, Taman Botani Negara Shah Alam
            </p>
            <p>
              <b>Target Participants: </b>120 Secondary BSMM Klang Members
            </p>

            {/* <p>
              Here are some of the main <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium,
              voluptate eum nesciunt at suscipit quis est soluta?
            </p> */}
          </BasicSection>
          {/* <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection> */}
          <Wrapper>
            <YoutubeVideo url="https://www.youtube.com/watch?v=UjT7SS02Jgg&ab_channel=TuttiFratelli" />
          </Wrapper>
          <FeaturesGallery />
          <Partners />
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer> */}
        {/* <Cta /> */}
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <ScrollableBlogPosts posts={posts} /> */}
        {/* </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div``;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const HeroContainer = styled.div`
  background-image: url('kb_hero.jpeg');
  background-size: cover;
  background-repeat: no-repeat;

  background-position: center;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
  padding: 0 10rem;
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 3rem;
  }

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
