import { Component,ViewChild,Output,EventEmitter,ElementRef,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-imgcol',
  templateUrl: './imgcol.component.html',
  styleUrls: ['./imgcol.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ImgcolComponent {

  @ViewChild('canvasval')canvasval:ElementRef;
  @ViewChild('colboxval')colboxval:any;
  @ViewChild('colboxval1')colboxval1:any;
  @ViewChild('colboxval2')colboxval2:any;
  @ViewChild('colboxval3')colboxval3:any;
  @ViewChild('colboxval4')colboxval4:any;
  @ViewChild('colboxval5')colboxval5:any;
  @ViewChild('colboxval6')colboxval6:any;
  @ViewChild('colboxval7')colboxval7:any;
  @ViewChild('colboxval8')colboxval8:any;
  @ViewChild('colboxval9')colboxval9:any;
  @ViewChild('colboxval10')colboxval10:any;
  @ViewChild('colboxval11')colboxval11:any;
  @ViewChild('colboxval12')colboxval12:any;
  @ViewChild('colboxval13')colboxval13:any;
  @ViewChild('colboxval14')colboxval14:any;
  @ViewChild('colboxval15')colboxval15:any;
    @ViewChild('colboxval16')colboxval16:any;
    @ViewChild('colboxval17')colboxval17:any;
  url;
  displayData=false;
  displayCol=false;
  private _canvas;
  private _ctx:CanvasRenderingContext2D;
  private _img;
  private _colbox;
  private _colbox1;
  private _colbox2;
  private _colbox3;
  private _colbox4;
  private _colbox5;
  private _colbox6;
  private _colbox7;
  private _colbox8;
  private _colbox9;
  private _colbox10;
  private _colbox11;
  private _colbox12;
  private _colbox13;
  private _colbox14;
  private _colbox15;
  private _colbox16;
    private _colbox17;

  private _hexval;
    private _hexvalavg;
  private _rgbaval;
    private _rgbavalavg;
  width =0;
  height =0;
  sigbits = 5 ;
  rshift = 8 - this.sigbits ;
  maxIterations = 1000;
  ractByPopulations = 0.75 ;
  pixels :any;
  @Output() outputColor=new EventEmitter();
  
  readUrl(event:any) {
    this.displayData=true;
    this.displayCol=true;
    if (event.target.files && event.target.files[0])  {
     var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.getimg(this.url);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  getimg(url:string)
  {
  
  this._colbox=this.colboxval.nativeElement;
  this._colbox.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox1=this.colboxval1.nativeElement;
  this._colbox1.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox2=this.colboxval2.nativeElement;
  this._colbox2.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox3=this.colboxval3.nativeElement;
  this._colbox3.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox4=this.colboxval4.nativeElement;
  this._colbox4.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox5=this.colboxval5.nativeElement;
  this._colbox5.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox6=this.colboxval6.nativeElement;
  this._colbox6.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox7=this.colboxval7.nativeElement;
  this._colbox7.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox8=this.colboxval8.nativeElement;
  this._colbox8.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._colbox9=this.colboxval9.nativeElement;
  this._colbox9.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox10=this.colboxval10.nativeElement;
  this._colbox10.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox11=this.colboxval11.nativeElement;
  this._colbox11.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox12=this.colboxval12.nativeElement;
  this._colbox12.style.cssText = "--bgcolorval:rgba(0,0,0,0)";


  this._colbox13=this.colboxval13.nativeElement;
  this._colbox13.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox14=this.colboxval14.nativeElement;
  this._colbox14.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox15=this.colboxval15.nativeElement;
  this._colbox15.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox16=this.colboxval16.nativeElement;
  this._colbox16.style.cssText = "--bgcolorval:rgba(0,0,0,0)";

  this._colbox17=this.colboxval17.nativeElement;
  this._colbox17.style.cssText = "--bgcolorval:rgba(0,0,0,0)";



  this._hexval="";
  this._rgbaval="";
      this._hexvalavg="";
      this._rgbavalavg="";
  this._canvas = this.canvasval.nativeElement;
    this._ctx = this._canvas.getContext("2d");
    this._img=document.createElement("img"),
    this._img.crossOrigin = 'anonymous';
    this._img.src = this.url;
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._img.onload=(()=>
          this._ctx.drawImage(this._img, 0, 0,this._img.width,this._img.height,0, 0,this._canvas.width, this._canvas.height));



       
  }

     
       
  

  getPixelColor(intcolorCount)
  {
    var quality =10;
    var intavgColor =24;
    var rgb = {r:0,g:0,b:0};
    var pixelArray = [];

    for(var i=1; i<intcolorCount;i++){
      var boundingRect=this._canvas.getBoundingClientRect();
      var x=(this._canvas.width /intcolorCount);
      var y=(this._canvas.height/intcolorCount);
      
    
       var px=this._ctx.getImageData(x*i,y*i,1,1);
      // var px=this._ctx.getImageData(i,k+i,1,1);
        var data_array=px.data;
        pixelArray.push("rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")")
        var pixelColor="rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")";
        this._colbox.style.cssText = "--bgcolorval:"+pixelColor;




       
         
       
          

    }
      pixelArray = pixelArray.filter((value, index, array) => !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
      // allarry = allarry.filter((value, index, array) => !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
      //
      // intavgColor = allarry.length;
      // for(var i=0; i<allarry.length;i++){
      //
      //     rgb.r += allarry[i][0];
      //     rgb.g += allarry[i][1];
      //     rgb.b += allarry[i][2];
      //     rgb.a += allarry[i][3];
      // }
      // // ~~ used to floor values
      // rgb.r = ~~(rgb.r/intavgColor);
      // rgb.g = ~~(rgb.g/intavgColor);
      // rgb.b = ~~(rgb.b/intavgColor);
      // rgb.a = ~~(rgb.a/intavgColor);
      //
      // console.log('checking rbg avg','rgba('+rgb.r+","+rgb.g+","+rgb.b+","+rgb.a+')');
      // var avgColor="rgba("+rgb.r+","+rgb.g+","+rgb.b+","+rgb.a+")";
      // this._rgbaval=avgColor;

    if(pixelArray.length) {
        this._colbox.style.cssText = "--bgcolorval:"+pixelArray[0];
        this._colbox1.style.cssText = "--bgcolorval:"+pixelArray[1];
        this._colbox2.style.cssText = "--bgcolorval:"+pixelArray[2];
        this._colbox3.style.cssText = "--bgcolorval:"+pixelArray[3];
        this._colbox4.style.cssText = "--bgcolorval:"+pixelArray[4];
        this._colbox5.style.cssText = "--bgcolorval:"+pixelArray[5];
        this._colbox6.style.cssText = "--bgcolorval:"+pixelArray[6];
        this._colbox7.style.cssText = "--bgcolorval:"+pixelArray[7];
        this._colbox8.style.cssText = "--bgcolorval:"+pixelArray[8];
        this._colbox9.style.cssText = "--bgcolorval:"+pixelArray[9];
        this._colbox10.style.cssText = "--bgcolorval:"+pixelArray[10];
        this._colbox11.style.cssText = "--bgcolorval:"+pixelArray[11];
        this._colbox12.style.cssText = "--bgcolorval:"+pixelArray[12];
        this._colbox13.style.cssText = "--bgcolorval:"+pixelArray[13];
        this._colbox14.style.cssText = "--bgcolorval:"+pixelArray[14];
        this._colbox15.style.cssText = "--bgcolorval:"+pixelArray[15];
        //this._colbox16.style.cssText = "--bgcolorval:"+avgColor;
     }
     /* var avgrgba = this.getAvargeColorvalue();
      console.log('avgrgba',avgrgba)

   */

      rgb = this.getAverageColor(this._img);
      var hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
      var rgbStr = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
      var hexStr = '#' + ('0'+rgb.r.toString(16)).slice(-2) + ('0'+rgb.g.toString(16)).slice(-2) + ('0'+rgb.b.toString(16)).slice(-2);
      var hslStr = 'hsl(' + Math.round(hsl.h * 360) + ', ' + Math.round(hsl.s * 100) + '%, ' + Math.round(hsl.l * 100) + '%)';
      this._colbox16.style.cssText = "--bgcolorval:"+rgbStr;
     // this._rgbaval=rgbStr;

     // var dColor = data_array[2] + 256 * data_array[1] + 65536 * data_array[0];
      this._hexvalavg=(hexStr);
      this._rgbavalavg=(rgbStr);
      this.outputColor.emit(this._hexval+" "+this._rgbaval+" "+this._hexvalavg+" "+this._rgbavalavg);

  }
     getAverageColor(img) {
        // var canvas = document.createElement('canvas');
        // var ctx = canvas.getContext('2d');
        // var width = canvas.width = img.naturalWidth;
        // var height = canvas.height = img.naturalHeight;
        //
        // ctx.drawImage(img, 0, 0);

        var imageData = this._ctx.getImageData(0, 0, this._canvas.width , this._canvas.height);
        var data = imageData.data;
        var r = 0;
        var g = 0;
        var b = 0;

        for (var i = 0, l = data.length; i < l; i += 4) {
            r += data[i];
            g += data[i+1];
            b += data[i+2];
        }

        r = Math.floor(r / (data.length / 4));
        g = Math.floor(g / (data.length / 4));
        b = Math.floor(b / (data.length / 4));
        // return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        return { r: r, g: g, b: b };
    }


    getAvargeColorvalue(){
        var x=(this._canvas.width /50);
        var y=(this._canvas.height/50);

        console.log("width",x);
        console.log("height",y);


        var px=this._ctx.getImageData(x,y,1,1);


       var  blockSize =24,
           i = -4,
           length,
           rgb = {r:0,g:0,b:0},
           count = 0;
        try {
            console.log("getImageData",px);
            length =px.data.length;
            while ( (i += blockSize * 4) < length ) {
                ++count;
               // console.log("data.data[i] ",px.data[i]);
                rgb.r += px.data[i];
                rgb.g += px.data[i+1];
                rgb.b += px.data[i+2];
            }
            rgb.r = ~~(rgb.r/count);
            rgb.g = ~~(rgb.g/count);
            rgb.b = ~~(rgb.b/count);
            //console.log("data",data_array);
        } catch(e) {
            /* security error, img on diff domain */
            return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
        }
        return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
    }


     rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return { h: h, s: s, l: l };
    }

    public getPixel(event:any):void
    {
        var boundingRect=this._canvas.getBoundingClientRect();
        var x=event.clientX-boundingRect.left;
        var y=event.clientY-boundingRect.top;
        var px=this._ctx.getImageData(x,y,1,1);
        var data_array=px.data;
        var pixelColor="rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")";
        this._rgbaval=pixelColor;
        var dColor = data_array[2] + 256 * data_array[1] + 65536 * data_array[0];
        this._hexval=('#'+dColor.toString(16));
        this._colbox17.style.cssText = "--bgcolorval:"+pixelColor;
        this.outputColor.emit(this._hexval+" "+this._rgbaval);
    }




}
