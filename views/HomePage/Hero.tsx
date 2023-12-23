import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      {/* <Contents>
        <CustomOverTitle>the coolest, saas product you have ever seen</CustomOverTitle>
        <Heading>Make your life easier with our SaaS</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents> */}
      {/* <ImageContainer> */}
      <NextImage src="/kb42_logo.png" alt="kembelia42" width={400} height={400} objectFit="contain" />
      <Contents>
        <Heading>Kem Belia Ke-42 2024</Heading>
        <NextLink href="/guides" passHref>
          <Button>
            View Campers Guides <span>&rarr;</span>
          </Button>
        </NextLink>
        {/* <Description>Youth On The Move</Description> */}
      </Contents>
      {/* <HeroIllustration /> */}
      {/* </ImageContainer> */}
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  justify-content: center;
  align-items: center;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  max-width: 60rem;
  margin-bottom: 10rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: rgb(var(--textSecondary));

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 6.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  color: rgb(var(--textSecondary));
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
