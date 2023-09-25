
const MenuItem = (props) => {

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        >

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {props.name}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {props.location}
            </p>
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default MenuItem;
