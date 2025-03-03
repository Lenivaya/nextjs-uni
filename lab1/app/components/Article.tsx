import { Post } from '@/app/types/post'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Article({ post }: { post: Post }) {
  return (
    <LinkBox
      as='article'
      p={2.5}
      borderWidth='1px'
      borderRadius='md'
      borderColor='gray.200'
      bg='white'
      height='180px'
      display='flex'
      flexDirection='column'
      position='relative'
      overflow='hidden'
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
        transition: 'all 0.2s ease-in-out'
      }}
      _dark={{
        bg: 'gray.800',
        borderColor: 'gray.700'
      }}
    >
      <LinkOverlay as={NextLink} href={`/articles/${post.id}`}>
        <Box mb={1.5} maxW='100%' overflow='hidden'>
          <Text
            fontWeight='bold'
            fontSize='md'
            color='gray.800'
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            className='capitalize'
            _dark={{ color: 'white' }}
          >
            {post.title}
          </Text>
        </Box>
      </LinkOverlay>

      <Box
        p={2}
        borderLeft='2px'
        borderLeftColor='blue.400'
        bg='gray.50'
        flex='1'
        display='flex'
        alignItems='flex-start'
        _dark={{
          bg: 'gray.700'
        }}
      >
        <Text
          fontSize='xs'
          fontStyle='italic'
          color='gray.600'
          overflow='hidden'
          lineHeight='1.4'
          _dark={{
            color: 'gray.300'
          }}
          css={{
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical'
          }}
        >
          {post.body}
        </Text>
      </Box>
    </LinkBox>
  )
}
