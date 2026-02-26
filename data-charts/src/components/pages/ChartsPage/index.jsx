import Header from '../../atoms/Header'
import Text from '../../atoms/Text'
import ChartBoard from '../../organisms/ChartBoard'
import RevenueChart from '../../organisms/Charts/RevenueChart'
import data from '../../../data/data.json'
import CategoryChart from '../../organisms/Charts/CategoryChart'
import CountryMapChart from '../../organisms/Charts/CountryMapChart'

export default function ChartsPage() {
  return (
    <>
      <header className="mb-10 flex flex-col items-center text-center">
        <Header className="mt-2 text-5xl">Dashboard</Header>
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
          className="col-span-8"
          title="Orders by category"
          height="h-[320px]"
        >
          <CategoryChart orders={data.orders} />
        </ChartBoard>

        <ChartBoard
          className="col-span-4"
          title="Orders by country"
          height="h-[320px]"
        >
          <CountryMapChart orders={data.orders} />
        </ChartBoard>
      </section>
    </>
  )
}
