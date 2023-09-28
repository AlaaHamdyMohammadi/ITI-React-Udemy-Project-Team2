import Button from "../Button";

function ContentInTheBox({category,categ}) {

    return (
      <div className="mt-2.5 p-3">
        <h4>{(category.title==undefined)?categ.name:category.title}</h4>
        <p className="w-4/6">
        <h5>{(category.description==undefined)?categ.description:category.description}</h5>
        </p>
        <Button width="border">Explore {(category.title==undefined)?categ.name:category.title}</Button>
      </div>
    );
}

export default ContentInTheBox
