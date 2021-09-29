(this.webpackJsonpcheck_weather_app=this.webpackJsonpcheck_weather_app||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(4),i=n.n(s),c=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},o=n(2),l=n(0),d=Object(a.createContext)(),m=function(e){var t=e.children,n=Object(a.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],c=Object(a.useState)(!1),m=Object(o.a)(c,2),u=m[0],_=m[1],p=Object(a.useState)(0),h=Object(o.a)(p,2),j=h[0],b=h[1],C=Object(a.useState)({code:"",description:"",humidity:0,pressure:0,sunRise:0,sunSet:0,temperature:0,temperatureFeels:0,timezone:0,windSpeed:0}),O=Object(o.a)(C,2),f=O[0],x=O[1],g=Object(a.useState)(!0),N=Object(o.a)(g,2),P=N[0],y=N[1];Object(a.useEffect)((function(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,",&units=metric&APPID=").concat("92ed051ea808c3123500bd8d06fcb003","&lang=pl");s.length>0&&fetch(e).then((function(e){return e.ok?e.json():void b(e.status)})).then((function(e){return x({code:e.weather[0].icon,description:e.weather[0].description,humidity:e.main.humidity,pressure:e.main.pressure,sunRise:e.sys.sunrise,sunSet:e.sys.sunset,temperature:e.main.temp,temperatureFeels:e.main.feels_like,timezone:e.timezone,windSpeed:e.wind.speed})})).catch((function(){_(!0)}))}),[s]);return Object(l.jsx)(d.Provider,{value:{city:s,error:u,errorCode:j,handleCloseClick:function(){x({code:"",description:"",humidity:0,pressure:0,sunRise:0,sunSet:0,temperature:0,temperatureFeels:0,timezone:0,windSpeed:0}),_(!1),i(""),b(0)},setCity:i,weather:f,dayOrNightStyles:P,setDayOrNightStyles:y},children:t})},u=(n(10),function(e){var t=e.message,n=e.code;return Object(l.jsxs)("div",{className:"errorDescriptionContainer",children:[Object(l.jsx)("span",{children:n}),Object(l.jsxs)("p",{children:[" ",t]})]})}),_=(n(11),n.p+"static/media/error.52091a3e.svg"),p=function(){var e=Object(a.useContext)(d),t=e.errorCode,n=e.dayOrNightStyles,r=e.handleCloseClick,s=function(){switch(t){case 401:return Object(l.jsx)(u,{message:"Klucz jest nie aktywny",code:t});case 404:return Object(l.jsx)(u,{message:"Co\u015b \u017ale wpisane! Nie znajduj\u0119 takiego miasta :(",code:t});case 429:return Object(l.jsx)(u,{message:"Limit przekroczony! Spr\xf3buj ponownie p\xf3\u017aniej",code:t});default:return Object(l.jsx)(u,{message:"Co\u015b nie tak u mnie :( Przepraszam :(",code:t})}}(),i=n?"errorPanelContainer":"errorPanelContainer errorPanelContainer--night";return Object(l.jsxs)("div",{className:i,children:[Object(l.jsx)("img",{src:_,alt:"B\u0142\u0105d"}),s,Object(l.jsx)("button",{onClick:r,className:"errorPanelContainer__button",children:"X"})]})},h=(n(12),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useContext)(d),i=s.setCity,c=s.dayOrNightStyles,m=c?"formContainer__form__input":"formContainer__form__input formContainer__form__input--night",u=c?"formContainer":"formContainer formContainer--night",_=c?"formContainer__form":"formContainer__form formContainer__form--night",p=c?"formContainer__form__button":"formContainer__form__button formContainer__form__button--night";return Object(l.jsx)("div",{className:u,children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(n),r("")},className:_,children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value.toUpperCase())},placeholder:"Wpisz miejsce...",className:m}),Object(l.jsx)("button",{type:"submit",className:p,children:"sprawd\u017a"})]})})}),j=(n(13),n.p+"static/media/cloudsDay.bff703eb.mp4"),b=n.p+"static/media/cloudsNight.d05fede6.mp4",C=n.p+"static/media/clearSky.03798eab.mp4",O=n.p+"static/media/clearSkyNight.f3fa4f0a.mp4",f=n.p+"static/media/mist.467e107b.mp4",x=n.p+"static/media/mistNight.4d03c8e6.mp4",g=n.p+"static/media/rain.ba986cdc.mp4",N=n.p+"static/media/rainNight.4b6c02a3.mp4",P=n.p+"static/media/snow.5685d1ba.mp4",y=n.p+"static/media/snowNight.046bda54.mp4",v=n.p+"static/media/thunderstorm.d894cde0.mp4",w=function(){var e=Object(a.useContext)(d),t=e.dayOrNightStyles,n=e.handleCloseClick,r=e.city,s=e.weather,i=s.code,c=s.description,o=s.humidity,m=s.pressure,u=s.sunRise,_=s.sunSet,p=s.temperature,h=s.temperatureFeels,w=s.timezone,S=s.windSpeed,k=function(e){var t=Math.floor(e/6e4%60),n=Math.floor(e/36e5%24);return"".concat(n<10?"0".concat(n):n,":").concat(t<10?"0".concat(t):t)},z=k((new Date).getTime()+1e3*w),D=k(1e3*(u+w)),F=k(1e3*(_+w)),B=t?"weatherPanelContainer":"weatherPanelContainer weatherPanelContainer--night",I=t?"weatherPanelContainer__panel__strong":"weatherPanelContainer__panel__strong weatherPanelContainer__panel__strong--night",R=t?"otherParametersContainer__element":"otherParametersContainer__element otherParametersContainer__element--night";return Object(l.jsxs)("div",{className:B,children:[Object(l.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,src:function(){if(i)switch(i){case"11d":case"11n":return v;case"02d":case"03d":case"04d":return j;case"02n":case"03n":case"04n":return b;case"09d":case"10d":return g;case"09n":case"10n":return N;case"13d":return P;case"13n":return y;case"50d":return f;case"50n":return x;case"01d":return C;case"01n":return O;default:return}}(),type:"video/mp4",className:"weatherPanelContainer__video"}),Object(l.jsxs)("div",{className:"weatherPanelContainer__panel",children:[Object(l.jsx)("h1",{children:r.toUpperCase()}),Object(l.jsx)("p",{className:"weatherPanelContainer__panel__timeAndDescription",children:z}),Object(l.jsx)("p",{className:"weatherPanelContainer__panel__timeAndDescription",children:c}),Object(l.jsxs)("strong",{className:I,children:[p.toFixed(),"\xb0C"]}),Object(l.jsxs)("div",{className:"otherParametersContainer",children:[Object(l.jsxs)("div",{className:R,children:[Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Wsch\xf3d s\u0142o\u0144ca",Object(l.jsx)("span",{className:"otherParametersContainer__element__description__value",children:D})]}),Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Zach\xf3d s\u0142o\u0144ca",Object(l.jsx)("span",{className:"otherParametersContainer__element__description__value",children:F})]})]}),Object(l.jsxs)("div",{className:R,children:[Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Pr\u0119dko\u015b\u0107 wiatru",Object(l.jsxs)("span",{className:"otherParametersContainer__element__description__value",children:[S,"km/h"]})]}),Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Odczuwalna",Object(l.jsxs)("span",{className:"otherParametersContainer__element__description__value",children:[h.toFixed(),"\xb0C"]})]})]}),Object(l.jsxs)("div",{className:"otherParametersContainer__element",children:[Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Wilgotno\u015b\u0107",Object(l.jsxs)("span",{className:"otherParametersContainer__element__description__value",children:[o,"%"]})]}),Object(l.jsxs)("p",{className:"otherParametersContainer__element__description",children:["Ci\u015bnienie",Object(l.jsxs)("span",{className:"otherParametersContainer__element__description__value",children:[m,"hPa"]})]})]})]}),Object(l.jsx)("button",{onClick:n,className:"weatherPanelContainer__panel__button",children:"X"})]})]})},S=n.p+"static/media/backgroundDay.3c23d1b0.jpg",k=n.p+"static/media/backgroundNight.1c335e68.jpg";n(14);var z=function(){var e=Object(a.useContext)(d),t=e.city,n=e.error,r=e.setDayOrNightStyles,s=e.dayOrNightStyles,i=Boolean(t)&&!n?Object(l.jsx)(w,{}):null,c=n?Object(l.jsx)(p,{}):null,o=Boolean(t)?null:Object(l.jsx)(h,{}),m=(new Date).getHours();Object(a.useEffect)((function(){m>=19||m<=5?s&&r(!1):(m<=19||m>=5)&&(s||r(!0))}),[r,s,m]);var u={backgroundImage:"url(".concat(s?S:k,")")};return Object(l.jsxs)("div",{className:"app",style:u,children:[o,i,c]})};n(15);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{children:Object(l.jsx)(z,{})})}),document.getElementById("root")),c()}],[[16,1,2]]]);
//# sourceMappingURL=main.0c68feb1.chunk.js.map