import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import { API, Smartphone } from '../Api/api'; 

const CreateNewBtn = styled.button`
    background-color: #000; 
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 13px;
    border: 0;
    border-radius: 6px;
`;
const ProductTableStyle = styled.table`
    border: 1px solid #ccc;
    border-radius: 3px;
    display: block;
    width: 100%;
    th, tr{
        border-bottom: 1px solid #ccc;
    }

    td{
        padding: 10px;
        vertical-align: top;
    }

    .product-image{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #000;
    }
`;

export default function ProductTable(){
    const [smartphones, setSmartphones] = useState<Smartphone[]>([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
          try {
            const data = await API.getAll();
            setSmartphones(data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
    }, []);
    console.log({smartphones});
    return (
        <>
        <Navbar />
        <HeaderTitle name="Smartphone"/>
        <Container>
            <div className='d-flex justify-content-end'>
                <CreateNewBtn>Create new</CreateNewBtn>
            </div>
            <ProductTableStyle className='my-4'>
                <tr>
                    <td></td>
                    <td><b>Name</b></td>
                    <td><b>Brand</b></td>
                    <td><b>Description</b></td>
                </tr>

                <tr>
                    <td><img className='product-image'src="https://placehold.co/100x100"/></td>
                    <td>Iphone 14</td>
                    <td>Apple</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                </tr>
                <tr>
                    <td><img className='product-image'src="https://placehold.co/100x100"/></td>
                    <td>Iphone 14</td>
                    <td>Apple</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                </tr>
                <tr>
                    <td><img className='product-image'src="https://placehold.co/100x100"/></td>
                    <td>Iphone 14</td>
                    <td>Apple</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                </tr>
                <tr>
                    <td><img className='product-image'src="https://placehold.co/100x100"/></td>
                    <td>Iphone 14</td>
                    <td>Apple</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                </tr>
            </ProductTableStyle>
        </Container>
        </>
    )
}