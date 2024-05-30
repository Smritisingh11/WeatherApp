import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import"./InfoBox.css";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';




export default function InfoBox({Info}){
    const INIT_URL="https://t3.ftcdn.net/jpg/07/65/47/68/240_F_765476803_lfxbMzfNNYgMUqbloGNAQjxUH7w6Z26o.jpg";
    const HOT_URL="https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls="
    const COLD_URL="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=1024x1024&w=is&k=20&c=HKfUCHjK0QpLFmr1fGMLk1HuU6FALlhEHnwmexcPm0k="
    const RAINY_URL="https://media.istockphoto.com/id/1254153999/photo/shallow-depth-of-field.jpg?s=1024x1024&w=is&k=20&c=6OGR5e_Hlc-T_9Pn-HJ-dNNMvAKd7aXmjvLTIfacxLE="
    return(
        <div className="InfoBox">
            <h1>Weather Info</h1><Card sx={{ maxWidth: 345 }}>

      <CardMedia
        sx={{ height: 140 }}
        image={
            Info.humidity>80
            ?RAINY_URL
            :Info.temp>15
            ?HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}{""}
          {Info.humidity>80
          ?<ThunderstormIcon/>
          :Info.temp>15
           ?<WbTwilightIcon/>

           : <AcUnitIcon/>

        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temp:{Info.temp}&deg;</p>
         <p>Humidity:{Info.humidity}</p>
         <p>MinTemp:{Info.tempMin}</p>
         <p>MaxTemp:{Info.tempMax}</p>
         <p>Weather feels like:{Info.feelsLike}&deg;c</p>

        </Typography>
        </CardContent>
    
    </Card>

 </div>
    );
}