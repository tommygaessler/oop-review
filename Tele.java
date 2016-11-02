public class Tele {
  public String brand;
  public String resolution;
  public String channel;
  public boolean on;
  public int volume;
  public boolean destroy;

  public Tele(String brand, String resolution, String channel, boolean on, int volume) {
    this.brand = brand;
    this.resolution = resolution;
    this.channel = channel;
    this.on = on;
    this.volume = volume;
    this.destroy = false;
  }

  public static void main(String[] args) {
    Tele leftTele = new Tele("Vizio", "1080x1920", "Herman", true, 8);
    Tele rightTele = new Tele("Vizio", "1080x1920", "Reid", true, 3);

    System.out.println(leftTele.channel);
    System.out.println(rightTele.channel);
    System.out.println(rightTele.volume = 9);
  }
}
