const Description = ({ description }) => {
  if (!description) { return null; }

  return (
    <div class="text-left"> {description} </div>
  );
};

export default Description 