export interface NameProps {
  params: { name: string };
  searchParams: any;
}

const Name: React.FC<NameProps> = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);

  return (
    <div>
      <h1>
        Hello, {params.name.substring(0, 1).toUpperCase()}
        {params.name.substring(1)}
      </h1>
    </div>
  );
};

export default Name;
