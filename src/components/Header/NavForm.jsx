import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';

function NavForm() {
  return (
    <Form inline className="searchBar ms-3 mt-2">
      <InputGroup className="rounded-pill overflow-hidden border border-black">
        <InputGroup.Text className="border-0 bg-white" id="basic-addon1">
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          className="mr-sm-2 border-0"
          type="text"
          placeholder="Search for anything"
        />
      </InputGroup>
    </Form>
  );
}

export default NavForm

