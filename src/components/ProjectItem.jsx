import React from 'react';
import { Link, Box, Text, Badge,Image, useColorModeValue } from '@chakra-ui/react';

function ProjectItem({ title,imageUrl, stack, link, id }) {
    const borderColor = useColorModeValue('stone.900', 'stone.200');

    return (
        <Link
            key={id}
            href={link}
            isExternal
            borderRadius="md"
            overflow="hidden"
            border="2px"
            borderColor={borderColor}
            _hover={{ textDecoration: 'none' }}
        >
            {imageUrl && (
                <Image
                    p={'4'}
                    src={imageUrl}
                    alt={`Image of ${title}`}
                    objectFit="cover"
                    width="100%"
                    height={{ base: "200px", md: "250px" }}
                />
            )}
            <Box p="4">
                <Text fontSize={{ base: "lg", md: "xl" }} mb={{ base: 2, md: 3 }} fontWeight="semibold">
                    {title}
                </Text>
                <Box display="flex" flexWrap="wrap" gap="2" alignItems="center">
                    {stack.map((item, index) => (
                        <Badge
                            key={index}
                            px="2"
                            py="1"
                            fontWeight="semibold"
                            borderRadius="md"
                            border="2px"
                            borderColor={borderColor}
                        >
                            {item}
                        </Badge>
                    ))}
                </Box>
            </Box>
        </Link>
    );
}

export default ProjectItem;
