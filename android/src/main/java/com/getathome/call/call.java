package com.getathome.call;

import android.content.Intent;
import android.net.Uri;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class call extends Plugin {

    @PluginMethod
    public void makeCall(PluginCall call) {
        String number = call.getString("number");
        Intent inter=new Intent(Intent.ACTION_DIAL, Uri.parse("tel:"+number));
        startActivityForResult(call,inter,1);
        JSObject ret = new JSObject();
        ret.put("value", number);
        call.success(ret);
    }
}
