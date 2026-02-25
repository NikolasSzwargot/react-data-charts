import Container from "../../atoms/Container";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";
import ChartBoard from "../../organisms/ChartBoard";
import RevenueChart from "../../organisms/Charts/RevenueChart";
import data from "../../../data/data.json";
import CategoryChart from "../../organisms/Charts/CategoryChart";

export default function ChartsPage() {
  return (
    <>
      <header className="mb-8">
        <Text className="text-sm">Data Charts</Text>
        <Header>Dashboard</Header>
      </header>

      <section className="grid grid-cols-12 gap-6">
        <ChartBoard
          className="col-span-12"
          title="Revenue by day"
          subtitle={`in ${data.meta.currency}`}
          height="h-[420px]"
        >
          <RevenueChart orders={data.orders} currency={data.meta.currency} />
        </ChartBoard>
      </section>

      <section className="mt-6 grid grid-cols-12 gap-6">
        <ChartBoard
          className="col-span-6"
          title="Orders by category"
          height="h-[320px]"
        >
          <CategoryChart orders={data.orders} />
        </ChartBoard>
      </section>
    </>
  );
}
