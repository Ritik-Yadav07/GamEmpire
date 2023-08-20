import { HStack, List, ListItem, Image, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
// import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre : (genre : Genre) =>void;
    selectedGenre:Genre | null;
}


function GenreList({onSelectGenre,selectedGenre}:Props) {
  const { data,error,isLoading } = useGenres(selectedGenre);

  if (error) return null;
  if (isLoading) return <Spinner />;


  return (
 <> 
 <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={genre.image_background}
            />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id===selectedGenre?.id ?'bold' : 'normal'} fontSize="lg" variant='link' onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
 </>
  );
}

export default GenreList;