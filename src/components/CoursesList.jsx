/* eslint-disable no-unused-vars */
import Button from './Button'

function ContentOutOfTheBox(){
    return (
      <div >
        <h1>A broad selection of courses</h1>
        <p className="text-2xl">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        <a
          href=""
          className="p-3 font-bold text-slate-500 no-underline hover:text-black"
        >
          Python
        </a>
        <a
          href=""
          className="p-3 font-bold text-slate-500 no-underline hover:text-black"
        >
          Excel
        </a>
        <a
          href=""
          className="p-3 font-bold text-slate-500 no-underline hover:text-black"
        >
          Web Development
        </a>
      </div>
    );
}

function ContentInTheBox(){
    return (
      <div className="border-1 mt-2.5 border-solid border-slate-400 p-3">
        <h4>Expand your career opportunities with Python</h4>
        <p className="w-4/6">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
        <Button width="border">Explore Python</Button>
      </div>
    );
}

function CoursesList() {
    return (
      <div className="mt-5 p-4">
        <ContentOutOfTheBox />
        <ContentInTheBox />
        
      </div>
    );
}

export default CoursesList
