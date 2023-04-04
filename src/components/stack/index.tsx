import { StackCard } from "./style";
import { StackProps } from "./type";

const Stack: React.FC<StackProps> = ({ title, logo }, key) => {
  return (
    <StackCard className={`${key}`} key={key}>
      <p>{title}</p>
      <img src={logo} alt={title} title={title} height="84px" width="84px" />
    </StackCard>
  );
};
export default Stack;
