import { Cards } from 'nextra/components'

export function BoxCard({ title, description, href, icon }) {
  return (
    <Cards.Card title={title} className='relative' href={href} icon={icon}>
      <div className="nextra-card-description  px-4 pb-4 text-sm opacity-70 order-1">
        {description}
      </div>
    </Cards.Card>
  )
}