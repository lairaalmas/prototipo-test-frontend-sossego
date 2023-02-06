import "../../../style/css/Step.min.css";

type IStepIcon = {
  icon: string;
  index: number;
  currentStep: number;
};

const StepIcon = (props: IStepIcon) => {
  let statusClass = "";

  if (props.index < props.currentStep) {
    statusClass = "-completed";
  } else if (props.index === props.currentStep) {
    statusClass = "-active";
  }

  const classes = `Step__icon ${statusClass} rounded-circle`;

  return (
    <span className={classes}>
      <i className={`${props.icon}`} />
    </span>
  );
};

export default StepIcon;
