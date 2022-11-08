export interface NameProps {}

const Name: React.FC<NameProps> = (props) => {
  return (
    <div>
      <h1>{"This is name page, go to `/name/{yourName}` to be welcomed"}</h1>
    </div>
  );
};

export default Name;
