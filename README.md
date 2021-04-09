# CAll
Capacitor Call plugin

## Procedure

Just clone it in your project with

### git clone https://github.com/adeelikram/call.git

and then open terminal in current directory and type

      npm install call 

if project directory already have android folder then 
run:

      npx cap sync

Now open project android folder in android studio 
and import module 

      import com.getathome.call.call;

then in:

      this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{      
      add(call.class);    
      }});
 
Now goto angular project

## Ionic Project

    import {Plugins} from "@capacitor/core"
    import {call} = Plugins
   ......................................
   .....................................

    sumFunc() {
    call.makeCall({
      number:"+xxxxxxxxxxx"       
     })
    }








