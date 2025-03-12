import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

                                //estructurado
export default function BasicCard(props) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{props.title}</Typography>
        <Typography level="body-sm">{props.date}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={props.image}
          srcSet={props.image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Precio total:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{props.price}</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="secondary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explora
        </Button>
      </CardContent>
    </Card>
  );
}
