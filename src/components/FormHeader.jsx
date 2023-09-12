const FormHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-1.5 p-6 w-full">
      <h2
        className="text-2xl font-semibold leading-none tracking-tight"
        style={{
          fontFamily: "'IM FELL English PRO', sans-serif"
        }}
      >
        {title}
      </h2>
      <div className="overflow-hidden">
        <p className="text-sm text-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FormHeader;
