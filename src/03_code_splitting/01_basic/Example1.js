// https://youtu.be/JU6sl_yyZqs?si=PZ0qndP-CfA_2NkD

function Example1() {
  return (
    <div>
      <h1>Example1: Dynamic import</h1>
      <button
        onClick={() => {
          import('./sum').then(module => {
            alert(module.sum(2, 2));
          });
        }}>
        Add 2 + 2
      </button>
    </div>
  );
}

export default Example1;
