import Header from '../../atoms/Header'
import Text from '../../atoms/Text'

export default function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <Header className="text-xl">{title}</Header>
      {subtitle ? <Text className="mt-1 text-sm">{subtitle}</Text> : null}
    </div>
  )
}
