import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import CustomTable from '~/components/Table/CustomTable'
import { useHistory } from 'react-router-dom'
import { getProductsList } from '~/services/api'
import moment from 'moment'
import { Helmet } from 'react-helmet'
import Error from '~/views/Errors'
import PageLoader from '~/components/Loader/PageLoader'

function ProductsList() {
  const history = useHistory()
  const [listProducts, setListProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    getProductsList()
      .then((response: any) => {
        const dataListProducts = response.data.data
        setListProducts(dataListProducts)
        setIsLoading(false)
        setIsFetched(true)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Tên sản phẩm',
        accessor: 'product_name'
      },
      {
        Header: 'Loại',
        accessor: 'productAdditionInformation.type.type_title'
      },
      {
        Header: 'Nhãn hiệu',
        accessor: 'productAdditionInformation.brand.brand_title'
      },
      {
        Header: 'Ngày khởi tạo',
        accessor: 'createdAt',
        Cell: ({ value }: any) => moment(value).utcOffset(7).format('DD/MM/YYYY - HH:mm:ss')
      }
    ],
    []
  )

  // const handleRowClick = (row: any) => {
  //   const id = row.values.id
  //   history.push(`/app/sell-management/products/${id}`)
  // }

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Danh sách sản phẩm</title>
        </Helmet>
        <PageLoader />
      </>
    )

  if (!isFetched) {
    return <Error errorCode='500'/>
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header className='flex-between'>
              <Card.Title as='h5'>Danh sách sản phẩm</Card.Title>
              <Button style={{ marginRight: 0 }} onClick={() => history.push('/app/sell-management/products/create')}>
                <i className='feather icon-plus-circle mr-2'></i>
                Thêm sản phẩm
              </Button>{' '}
            </Card.Header>
            <Card.Body>
              <CustomTable columns={columns} data={listProducts} handleRowClick={{}} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ProductsList
