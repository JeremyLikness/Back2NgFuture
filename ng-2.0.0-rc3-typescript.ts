declare var Component: any, Injectable: any, Inject: any, Input: any, ViewChild: any,  
    bootstrap: any, app: any;

interface OnInit {
    ngOnInit(): void; 
}

// -- start example

@Injectable()
class Service {
    public x: number = 1;
    public xn: number = 1;

    public next(): number {
        let next = this.x;
        this.x = this.xn;
        this.xn = next + this.x; 
        return next;
    }
}

@Component({
    selector: 'app-title', 
    template: '<h1>{{title}}</h1>'
})
export class TitleComponent {
    public title: string = 'Angular 2.0.0.rc3 with TypeScript Example';
}

@Component({
    selector: 'square',
    template: '<div #myDiv style="border: solid 1px black; background: yellow; float: left; margin: 5px;">' +
                    '</div>'
})
export class SquareComponent implements OnInit {

    @ViewChild('myDiv')
    public myDiv: any;

    @Input('size')
    public size: number = 5;

    public ngOnInit(): void {
            this.myDiv.nativeElement.style.width = 
                this.myDiv.nativeElement.style.height = (this.size*10);
    }

}

@Component({
    selector: 'sequence', 
    template: '<square *ngFor="let i of seq" [size]="i"></square>',
    viewProviders: [Service],
    directives: [SquareComponent]
})
export class SequenceComponent {
    
    public seq: number[] = [];
    
    constructor (service: Service) {
        this.seq = [];
        let x = 0;
        while (x < 8) {
            this.seq.push(service.next());
            x += 1;
        }
    }
}
        
@Component({
    selector: 'sequence-app',
    template: '<div><app-title></app-title><sequence></sequence></div>',
    directives: [TitleComponent, SequenceComponent]
})
export class AppComponent { }
               
document.addEventListener("DOMContentLoaded", function() {
    bootstrap(AppComponent);
});
