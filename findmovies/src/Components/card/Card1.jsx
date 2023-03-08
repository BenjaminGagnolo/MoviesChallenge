import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, FormControl, FormLabel, Switch, Box, Tooltip, Image } from '@chakra-ui/react';


const Card1 = ({id, original_language, title, poster_path}) =>{
    return(

    <Card>
        <CardBody key={id}>
            <Image src={poster_path} fallbackSrc='https://via.placeholder.com/100'/>
            <Text>
                title: {title}
            </Text>
            <Text>
                language: {original_language}
            </Text>
        </CardBody>
    </Card>

    )
}

export default Card1;