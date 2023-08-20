import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";


interface Props{

    onSearch:(searchText:string) =>void;
}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(event);
    // if(ref.current) console.log(ref.current.value);
    if(ref.current) onSearch(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
