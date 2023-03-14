import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, FormControl, FormLabel, Switch, Box, Tooltip, Image } from '@chakra-ui/react';
//import './Card1.scss'

const Card1 = ({id, original_language, title, poster_path}) =>{
    return(
        
    <div className='card'>

    <Card >
        <CardBody key={id} className='contenidoCard'>
            <Image className='cardimg' src={poster_path} fallbackSrc='https://via.placeholder.com/100'/>
            <CardFooter className='content'>

            <Text className='title'>
                title: {title}
            </Text>
            <br />
            <Text className='language'>
                language: {original_language}
            </Text>
            
            </CardFooter>
        </CardBody>
    </Card>
    </div>

    )
}

export default Card1;