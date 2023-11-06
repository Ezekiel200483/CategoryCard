const SingleCard = ({title,img}) => {
  return (
    <div className="single-card">
        {img}
        <span>{title}</span>
    </div>
  )
  
};
export default SingleCard;

