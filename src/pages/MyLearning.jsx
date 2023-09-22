import { Helmet } from 'react-helmet';
function MyLearning() {
  return (
    <>
      <div>
        <Helmet>
          <title>
            Online Courses - Learn Anything, On Your Schedule | Udemy
          </title>
        </Helmet>
        <div className=' h-48 relative' style={{ backgroundColor: '#2d2f31' }}>
          <h1 className='absolute left-64 top-16 font-bold text-gray-100'>My Learning</h1>
          <h6 className='absolute left-64 top-40 font-bold text-gray-100'>All Courses</h6>
          <h6 className='absolute left-64 pl-32 top-40 font-bold text-gray-100'>Wishlist</h6>
          <h6 className='absolute left-64 pl-60 top-40 font-bold text-gray-100'>Archive</h6>
        </div>
      </div>
    </>
  );
}

export default MyLearning;
