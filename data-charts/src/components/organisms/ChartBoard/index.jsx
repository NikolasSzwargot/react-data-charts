import Box from "../../atoms/Box";
import SectionHeader from "../../molecules/SectionHeader";

export default function ChartBoard({
  title,
  subtitle,
  className = "",
  height = "h-[380px]",
  children,
}) {
  return (
    <Box className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className={`mt-6 ${height}`}>
        {children || (
          <div className="h-full rounded-2xl border border-dashed border-slate-700" />
        )}
      </div>
    </Box>
  );
}
