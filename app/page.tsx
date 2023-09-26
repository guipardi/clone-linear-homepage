import { Container } from '@/components/atoms/Container'
import { Heading } from '@/components/atoms/Heading'
import { Hero } from '@/components/organisms/Hero/view'
import { Text } from '@/components/atoms/Text'

export default function Home() {
  return (
    <div>
      <header className="text-white">
        <Container>header</Container>
      </header>
      <main className="text-white">
        <Container>
          <Hero>
            <Heading as="h1" size="5xl">
              Linear is a better way <br />
              to build products
            </Heading>
            <Text as="p" size="lg">
              Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.
            </Text>
          </Hero>
        </Container>
      </main>
      <footer className="text-white">
        <Container>footer</Container>
      </footer>
    </div>
  )
}
