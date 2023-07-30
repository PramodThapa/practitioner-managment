interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...others } = props;

  return (
    <div hidden={value !== index} {...others}>
      {value === index && children}
    </div>
  );
}
