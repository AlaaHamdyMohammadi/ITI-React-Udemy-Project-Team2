/* eslint-disable react/prop-types */
import Button from "../Button";

function ContentInTheBox({category,categ}) {

    return (
      <div className="mt-2.5 p-3">
        <h4 className="text-2xl font-bold">
          {category.title == undefined ? categ.title : category.title}
        </h4>
        <p className=" w-4/6">
          <h6>
            {category.description == undefined
              ? categ.description
              : category.description}
          </h6>
        </p>
        <Button width="border">
          Explore {category.title == undefined ? categ.name : category.name}
        </Button>
      </div>
    );
}

export default ContentInTheBox
