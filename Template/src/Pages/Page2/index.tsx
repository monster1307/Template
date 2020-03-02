import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { WeatherForecastService} from 'Services';

const useStyles = makeStyles({
  root: {
  },
});

function Page2() {

  const classes = useStyles();
  const [ weathers, setWeathers ] = useState<string[]>([]);

  useEffect(() => {
    console.log("Component will mount");
    
    const weatherForecast = WeatherForecastService.subscribe({
      next: result => setWeathers(result),
      complete: () => console.log('done'),
      error: () => console.error("ERROR while fetching weatherForecast")
     })

    return () => {
      weatherForecast.unsubscribe();
      console.log("Component  unmounted");
    }
}, []);

  return (
    <div className={classes.root}>
      {
        weathers.map((weather, key) => {
          return (<div key={key}>{weather}</div>);
        })
      }
    </div>
  );
}

export default Page2;
