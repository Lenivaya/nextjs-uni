import { Post } from '@/app/types/post'
import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

async function getArticle(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch article')
  return res.json()
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  )
  if (!res.ok) throw new Error('Failed to fetch comments')
  return res.json()
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1)
  }))
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [article, comments] = await Promise.all([
    getArticle(id),
    getComments(id)
  ])

  return (
    <Container maxW='container.lg' py={8}>
      <Flex direction='column' gap={8}>
        <Box as='article'>
          <Heading
            as='h1'
            size='2xl'
            mb={4}
            background='linear-gradient(to right, #63B3ED, #9F7AEA)'
            backgroundClip='text'
          >
            {article.title}
          </Heading>
          <Text fontSize='lg' color='gray.300' lineHeight='tall'>
            {article.body}
          </Text>
        </Box>

        <Box borderBottom='1px' borderColor='gray.700' />

        <Box as='section'>
          <Heading as='h2' size='xl' mb={6}>
            Comments
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {comments.map((comment) => (
              <Box
                key={comment.id}
                bg='gray.800'
                p={4}
                borderRadius='lg'
                transition='all 0.2s'
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              >
                <Flex direction='column' gap={2}>
                  <Box>
                    <Heading size='sm' mb={1}>
                      {comment.name}
                    </Heading>
                    <Text color='blue.400' fontSize='sm'>
                      {comment.email}
                    </Text>
                  </Box>
                  <Text color='gray.400'>{comment.body}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  )
}
