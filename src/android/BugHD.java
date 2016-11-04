package cn.com.ihealthlabs.cordova.plugins;

import android.app.Application;
import im.fir.sdk.FIR;

public class BugHD extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    System.out.println("BugHD running.......");
    FIR.init(this);
  }
}
