import ExpenseItem from "./components/features/ExpenseItem/ExpenseItem.jsx";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const expenses = [
  {
    id: "e1",
    title: "휴지",
    amount: formatNumber(9000),
    date: new Date().toLocaleDateString("ko-KR"),
  },
  {
    id: "e2",
    title: "TV",
    amount: formatNumber(80000),
    date: new Date().toLocaleDateString("ko-KR"),
  },
  {
    id: "e3",
    title: "닭 가슴살",
    amount: formatNumber(10000),
    date: new Date().toLocaleDateString("ko-KR"),
  },
  {
    id: "e4",
    title: "책상",
    amount: formatNumber(450000),
    date: new Date().toLocaleDateString("ko-KR"),
  },
];
const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
