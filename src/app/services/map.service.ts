import { Injectable } from '@angular/core';
import { tileLayer, latLng, icon, Map, MapOptions, Marker, LatLng, Icon, Popup, Polyline } from 'leaflet';
import { Performer } from '../models/Performer';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  map: Map;
  mapOptions: MapOptions;
  icon: Icon;
  marker: Marker;
  markers: Marker[] = [];
  polyline: Polyline;
  polylines: Polyline[] = [];
  popup: Popup;
  latLng: LatLng;
  latLngArray: LatLng[] = [];
  color: string;
  readonly metroSpb = [
    {
      title: 'Линия 1',
      station: [
        {
          title: 'Проспект Ветеранов',
          lat: 59.84188,
          lng: 30.251543
        },
        {
          title: 'Ленинский проспект',
          lat: 59.851677,
          lng: 30.268279
        },
        {
          title: 'Автово',
          lat: 59.867369,
          lng: 30.261345
        },
        {
          title: 'Кировский завод',
          lat: 59.879726,
          lng: 30.261908
        },
        {
          title: 'Нарвская',
          lat: 59.901169,
          lng: 30.274676
        },
        {
          title: 'Балтийская',
          lat: 59.907245,
          lng: 30.299217
        },
        {
          title: 'Технологический институт-1',
          lat: 59.916799,
          lng: 30.318967
        },
        {
          title: 'Пушкинская',
          lat: 59.920757,
          lng: 30.329641
        },
        {
          title: 'Владимирская',
          lat: 59.927467,
          lng: 30.347875
        },
        {
          title: 'Площадь Восстания',
          lat: 59.931483,
          lng: 30.36036
        },
        {
          title: 'Чернышевская',
          lat: 59.944558,
          lng: 30.359754
        },
        {
          title: 'Площадь Ленина',
          lat: 59.955725,
          lng: 30.355957
        },
        {
          title: 'Выборгская',
          lat: 59.97111,
          lng: 30.347553
        },
        {
          title: 'Лесная',
          lat: 59.98477,
          lng: 30.344201
        },
        {
          title: 'Площадь Мужества',
          lat: 59.999655,
          lng: 30.366595
        },
        {
          title: 'Политехническая',
          lat: 60.008926,
          lng: 30.370952
        },
        {
          title: 'Академическая',
          lat: 60.012763,
          lng: 30.395706
        },
        {
          title: 'Гражданский проспект',
          lat: 60.03481,
          lng: 30.418087
        },
        {
          title: 'Девяткино',
          lat: 60.049799,
          lng: 30.442248
        },
        {
          title: 'Девяткино',
          lat: 60.049799,
          lng: 30.442248
        }
      ]
    },
    {
      title: 'Линия 2',
      station: [
        {
          title: 'Купчино',
          lat: 59.829887,
          lng: 30.375399
        },
        {
          title: 'Звёздная',
          lat: 59.833228,
          lng: 30.349616
        },
        {
          title: 'Московская',
          lat: 59.852192,
          lng: 30.322206
        },
        {
          title: 'Парк Победы',
          lat: 59.86659,
          lng: 30.321712
        },
        {
          title: 'Электросила',
          lat: 59.879425,
          lng: 30.318658
        },
        {
          title: 'Московские Ворота',
          lat: 59.891924,
          lng: 30.317751
        },
        {
          title: 'Фрунзенская',
          lat: 59.906155,
          lng: 30.317509
        },
        {
          title: 'Технологический институт-2',
          lat: 59.916622,
          lng: 30.318505
        },
        {
          title: 'Сенная площадь',
          lat: 59.927090,
          lng: 30.320378
        },
        {
          title: 'Невский проспект',
          lat: 59.935601,
          lng: 30.327134
        },
        {
          title: 'Горьковская',
          lat: 59.956323,
          lng: 30.318724
        },
        {
          title: 'Петроградская',
          lat: 59.966465,
          lng: 30.311432
        },
        {
          title: 'Чёрная речка',
          lat: 59.985574,
          lng: 30.300792
        },
        {
          title: 'Пионерская',
          lat: 60.002576,
          lng: 30.296791
        },
        {
          title: 'Удельная',
          lat: 60.016707,
          lng: 30.315421
        },
        {
          title: 'Озерки',
          lat: 60.037141,
          lng: 30.321529
        },
        {
          title: 'Проспект Просвещения',
          lat: 60.051416,
          lng: 30.332632
        },
        {
          title: 'Парнас',
          lat: 60.06715,
          lng: 30.334128
        }        
      ]
    },
    {
      title: 'Линия 3',
      station: [
        {
          title: 'Приморская',
          lat: 59.948545,
          lng: 30.234526
        },
        {
          title: 'Василеостровская',
          lat: 59.942927,
          lng: 30.278159
        },
        {
          title: 'Гостиный Двор',
          lat: 59.934049,
          lng: 30.333772
        },
        {
          title: 'Маяковская',
          lat: 59.931612,
          lng: 30.35491
        },
        {
          title: 'Площадь Александра Невского-1',
          lat: 59.924314,
          lng: 30.385102
        },
        {
          title: 'Елизаровская',
          lat: 59.896705,
          lng: 30.423637
        },
        {
          title: 'Ломоносовская',
          lat: 59.877433,
          lng: 30.441951
        },
        {
          title: 'Пролетарская',
          lat: 59.865275,
          lng: 30.47026
        },
        {
          title: 'Обухово',
          lat: 59.848795,
          lng: 30.457805
        },
        {
          title: 'Рыбацкое',
          lat: 59.830943,
          lng: 30.500455
        }
      ]
    },
    {
      title: 'Линия 4',
      station: [
        {
          title: 'Улица Дыбенко',
          lat: 59.907573,
          lng: 30.483292
        },
        {
          title: 'Проспект Большевиков',
          lat: 59.919819,
          lng: 30.466908
        },
        {
          title: 'Ладожская',
          lat: 59.93244,
          lng: 30.439474
        },
        {
          title: 'Новочеркасская',
          lat: 59.92933,
          lng: 30.412918
        },
        {
          title: 'Площадь Александра Невского-2',
          lat: 59.92365,
          lng: 30.383471
        },
        {
          title: 'Лиговский проспект',
          lat: 59.920747,
          lng: 30.355245
        },
        {
          title: 'Достоевская',
          lat: 59.928072,
          lng: 30.345746
        },
        {
          title: 'Спасская',
          lat: 59.926839,
          lng: 30.319752
        },
      ]
    },
    {
      title: 'Линия 5',
      station: [
        {
          title: 'Международная',
          lat: 59.869966,
          lng: 30.379045
        },
        {
          title: 'Бухарестская',
          lat: 59.883681,
          lng: 30.369673
        },
        {
          title: 'Волковская',
          lat: 59.896265,
          lng: 30.35686
        },
        {
          title: 'Обводный канал',
          lat: 59.914697,
          lng: 30.349361
        },
        {
          title: 'Звенигородская',
          lat: 59.922304,
          lng: 30.335784
        },
        {
          title: 'Садовая',
          lat: 59.927008,
          lng: 30.317456
        },
        {
          title: 'Адмиралтейская',
          lat: 59.935877,
          lng: 30.314886
        },
        {
          title: 'Спортивная-1',
          lat: 59.952078,
          lng: 30.291312
        },
        {
          title: 'Спортивная-2',
          lat: 59.950365,
          lng: 30.287356
        },
        {
          title: 'Чкаловская',
          lat: 59.950365,
          lng: 30.287356
        },
        {
          title: 'Крестовский остров',
          lat: 59.971838,
          lng: 30.259427
        },
        {
          title: 'Старая Деревня',
          lat: 59.989228,
          lng: 30.255169
        },
        {
          title: 'Комендантский проспект',
          lat: 60.008356,
          lng: 30.258915
        },
      ]
    }
  ]
  constructor() {
  }

  updateMap(): void {
    this.map.invalidateSize();
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.map.on('click', (e: any) => {
      console.log(e.latlng)
    });
    this.map.on('resize', _ => console.log('!'))
  }

  showMetro(metro) {
    const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 36]);
    metro.map(line => {
      line.station.map(station => {
        const latLng = new LatLng(station.lat, station.lng);
        this.createMarker(latLng, station.title, icon)
          .addTo(this.map)
      })
    })
  }

  showPerformers(perf: Performer[]): Marker[] {
    this.markers.map(marker => marker.removeFrom(this.map));
    this.markers = [];

    const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 0]);
    perf.map(card => {
      const latLng = new LatLng(card.location.lat, card.location.lng);
      this.markers.push(this.createMarker(latLng, card.description.title, icon, card.logo, card.getLocation() ));        
    });
    return this.markers
  }

  createLatLng(lat: number, lng: number): LatLng {
    return new LatLng(lat, lng);
  }

  initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng(59.93575245264131, 30.316257476806644),
      layers: [
        tileLayer(
          `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          {
            maxZoom: 18,
          })
      ]
    };
  }

  removeAllFromMap(): void {
    this.polyline.removeFrom(this.map);
    this.markers.map(marker => {
        marker.removeFrom(this.map);
    });
  }

  createIcon(url: string, size: [number, number], anchor: [number, number]): Icon {
    return icon({
      iconUrl: url,
      iconSize: size,
      iconAnchor: anchor
    });
  }

  createPolyline(latLngArray: LatLng[], color: string = '#ff9900'): Polyline {
    const polyline = new Polyline(latLngArray, {color});
    this.polylines.push(polyline);
    return polyline;
  }

  createMarker(latLng: LatLng, title: string , icon?: Icon, logo?: string, adress?: string): Marker {
    if (!icon) {
      const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 36]);
    }
    return new Marker(latLng, { title } )
      .setIcon(icon)
      .bindPopup(`
        <div style="display: flex;">
          <div class="logo">
            <img style="border-radius: 50%; border: 1px solid #ccc" src='${logo}'>
          </div>
          <div>
            <p style="margin: 5px 1rem 10px; font-weight: 500; font-size: 14px; font-family: Roboto; color: #334D6E; text-decoration: underline">${title}</p>
            <p style="margin: 0 1rem; font-size: 12px; font-family: Roboto">${adress}</p>
          </div>
        </div>
        `)
  }

  getMylocation(): void {
    this.map.locate({ setView: true, enableHighAccuracy: true });
  }
}