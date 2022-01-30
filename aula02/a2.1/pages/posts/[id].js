import NextLink from 'next/link';
import { Box, Text } from '@skynexui/components';
import { useRouter } from 'next/router';

export default function PostByIdScreen() {
  const router = useRouter();
  const post = {
    title: `Post: [${router.query.id}]`,
    date: `11/11/1111`,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem urna, laoreet sed magna ac, scelerisque rhoncus nulla. Morbi rhoncus venenatis elementum. Phasellus nec purus ut nisi tempus sagittis sed eget lacus. Nullam in nibh porttitor, dictum metus placerat, molestie augue. Phasellus a mi fermentum erat tempor sollicitudin. Donec eget elementum leo. Morbi sit amet enim varius, ultrices leo commodo, faucibus purus.
      Vestibulum ut sem est. Phasellus sodales rhoncus convallis. Etiam sit amet libero non tellus vestibulum bibendum. Integer ac eros vel justo imperdiet dictum. Etiam dapibus dolor augue, a suscipit metus sollicitudin in. Integer suscipit ac justo eget molestie. Vivamus id auctor lectus. Ut malesuada est quis urna mollis semper. Nulla cursus, metus eget elementum venenatis, tortor massa tincidunt justo, ac faucibus tortor felis id lacus. Sed quis dolor sem. Sed cursus justo eu accumsan rhoncus. Nam eget lectus libero. Nulla nulla leo, iaculis sagittis massa non, malesuada porta velit. Fusce vel accumsan nisi.
    `,
  }

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2' }}
      >
        {post.title}
      </Text>
      <Text styleSheet={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>
          {post.content}
        </Text>

        {post.video && <iframe style={{ marginTop: '32px', minHeight: '400px' }} src={post.video} /> }
      </Box>


      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline' } }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}
