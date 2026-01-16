import { useState, useRef, useCallback } from "react";
import { Upload, Download, Share2, Camera, Image as ImageIcon, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const PhotoFrameSection = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "ফাইল অনেক বড়",
          description: "অনুগ্রহ করে ৫MB এর কম ছবি আপলোড করুন",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawFramedImage = useCallback(() => {
    if (!uploadedImage || !canvasRef.current) return null;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    return new Promise<void>((resolve) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        // Set canvas size (square for profile)
        const size = 600;
        canvas.width = size;
        canvas.height = size;

        // Draw the uploaded image (centered and cropped to square)
        const minDim = Math.min(img.width, img.height);
        const sx = (img.width - minDim) / 2;
        const sy = (img.height - minDim) / 2;
        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);

        // Draw frame border
        const borderWidth = 25;
        ctx.strokeStyle = "#0F3D2E";
        ctx.lineWidth = borderWidth;
        ctx.strokeRect(borderWidth / 2, borderWidth / 2, size - borderWidth, size - borderWidth);

        // Draw inner gold accent line
        ctx.strokeStyle = "#F4C430";
        ctx.lineWidth = 4;
        ctx.strokeRect(borderWidth + 6, borderWidth + 6, size - (borderWidth + 6) * 2, size - (borderWidth + 6) * 2);

        // Draw bottom banner
        const bannerHeight = 80;
        const bannerY = size - bannerHeight - borderWidth;
        
        // Semi-transparent green background for banner
        ctx.fillStyle = "rgba(15, 61, 46, 0.92)";
        ctx.fillRect(borderWidth, bannerY, size - borderWidth * 2, bannerHeight);

        // Gold top border for banner
        ctx.fillStyle = "#F4C430";
        ctx.fillRect(borderWidth, bannerY, size - borderWidth * 2, 3);

        // Daripalla symbol (Scale icon representation)
        ctx.font = "bold 28px Arial";
        ctx.fillStyle = "#F4C430";
        ctx.textAlign = "left";
        ctx.fillText("⚖️", borderWidth + 15, bannerY + 48);

        // Candidate name and slogan
        ctx.font = "bold 20px 'Hind Siliguri', sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText("মনজুর রহমান", size / 2, bannerY + 35);

        ctx.font = "16px 'Hind Siliguri', sans-serif";
        ctx.fillStyle = "#F4C430";
        ctx.fillText("ন্যায়ের পক্ষে, জনতার পাশে", size / 2, bannerY + 60);

        // Draw decorative corner elements
        const cornerSize = 40;
        ctx.strokeStyle = "#F4C430";
        ctx.lineWidth = 3;

        // Top-left corner
        ctx.beginPath();
        ctx.moveTo(borderWidth + 10, borderWidth + cornerSize);
        ctx.lineTo(borderWidth + 10, borderWidth + 10);
        ctx.lineTo(borderWidth + cornerSize, borderWidth + 10);
        ctx.stroke();

        // Top-right corner
        ctx.beginPath();
        ctx.moveTo(size - borderWidth - cornerSize, borderWidth + 10);
        ctx.lineTo(size - borderWidth - 10, borderWidth + 10);
        ctx.lineTo(size - borderWidth - 10, borderWidth + cornerSize);
        ctx.stroke();

        resolve();
      };
      img.src = uploadedImage;
    });
  }, [uploadedImage]);

  const handleDownload = async () => {
    if (!uploadedImage) return;

    setIsProcessing(true);
    try {
      await drawFramedImage();
      
      if (canvasRef.current) {
        const link = document.createElement("a");
        link.download = "manzur-rahman-supporter-frame.png";
        link.href = canvasRef.current.toDataURL("image/png");
        link.click();

        toast({
          title: "সফল!",
          description: "আপনার ফ্রেম সহ ছবি ডাউনলোড হয়েছে",
        });
      }
    } catch (error) {
      toast({
        title: "ত্রুটি",
        description: "ছবি ডাউনলোড করতে সমস্যা হয়েছে",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleShare = async () => {
    if (!canvasRef.current) return;

    try {
      await drawFramedImage();
      
      canvasRef.current.toBlob(async (blob) => {
        if (blob && navigator.share) {
          const file = new File([blob], "manzur-rahman-supporter.png", { type: "image/png" });
          await navigator.share({
            files: [file],
            title: "মনজুর রহমান - আমার সমর্থন",
            text: "আমি মনজুর রহমানকে সমর্থন করি। ন্যায়ের পক্ষে, জনতার পাশে!",
          });
        } else {
          toast({
            title: "শেয়ার করুন",
            description: "অনুগ্রহ করে ছবি ডাউনলোড করে ফেসবুকে শেয়ার করুন",
          });
        }
      });
    } catch (error) {
      console.log("Share cancelled or not supported");
    }
  };

  return (
    <section id="photo-frame" className="py-24 section-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-light-geo opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-bold">সমর্থন প্রকাশ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            প্রোফাইল ফ্রেম ক্যাম্পেইন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আপনার প্রোফাইল ছবিতে সমর্থনের বার্তা যুক্ত করুন এবং সামাজিক মাধ্যমে শেয়ার করুন
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Upload Section */}
            <div className="glass-panel rounded-3xl p-8 animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl glass-icon flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">ছবি আপলোড করুন</h3>
                <p className="text-muted-foreground text-sm">
                  আপনার প্রোফাইল ছবি নির্বাচন করুন
                </p>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center cursor-pointer hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group"
              >
                {uploadedImage ? (
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="আপলোড করা ছবি"
                      className="w-32 h-32 object-cover rounded-xl mx-auto"
                    />
                    <p className="text-sm text-primary mt-3 font-medium">
                      অন্য ছবি নির্বাচন করতে ক্লিক করুন
                    </p>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-primary/50 mx-auto mb-4 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <p className="text-muted-foreground mb-2">
                      ক্লিক করুন বা টেনে আনুন
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG - সর্বোচ্চ ৫MB
                    </p>
                  </>
                )}
              </div>

              {uploadedImage && (
                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={handleDownload}
                    disabled={isProcessing}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    ডাউনলোড
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    শেয়ার
                  </Button>
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="glass-panel rounded-3xl p-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl glass-icon flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">প্রিভিউ</h3>
                <p className="text-muted-foreground text-sm">
                  ফ্রেম সহ আপনার ছবি দেখুন
                </p>
              </div>

              <div className="relative aspect-square bg-muted/50 rounded-2xl overflow-hidden border border-primary/10">
                {uploadedImage ? (
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                    onLoad={() => drawFramedImage()}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <div className="w-20 h-20 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center mb-4">
                      <ImageIcon className="w-8 h-8 text-primary/30" />
                    </div>
                    <p className="text-sm">ছবি আপলোড করলে এখানে প্রিভিউ দেখাবে</p>
                  </div>
                )}

                {/* Frame overlay for preview when image exists */}
                {uploadedImage && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* This triggers canvas render */}
                    {(() => { drawFramedImage(); return null; })()}
                  </div>
                )}
              </div>

              {/* Social sharing hint */}
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    ডাউনলোড করে ফেসবুকে প্রোফাইল ছবি হিসেবে ব্যবহার করুন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoFrameSection;
