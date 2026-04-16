import Center from './Center'
import Right from './Right'
import Layout from './Layout'
const Problems = () => {
  return (
    <div className='flex w-full gap-4 h-auto justify-between scrollbar-hide'>

      <Layout >
        <Center />
        <Right />
      </Layout>
    </div>
  )
}

export default Problems