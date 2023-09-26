import { Container } from '@/components/atoms/Container'
import { Heading } from '@/components/atoms/Heading'
import { Hero } from '@/components/organisms/Hero/view'
import { Text } from '@/components/atoms/Text'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="5xl" className="my-6">
          Linear is a better way <br />
          to build products
        </Heading>
        <Text as="p" size="lg" className="mb-12">
          Meet the new standard for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </Text>
        <img src="/images/hero.webp" alt="Hero Image" />
      </Hero>
    </Container>
  )
}
