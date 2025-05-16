import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xblowddp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <p className="text-center mb-8 text-muted-foreground">
        Let’s connect and build something together. Or just leave a message to
        chat!
      </p>

      <Card>
        <CardContent className="p-6">
          {submitted ? (
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2 text-green-500" size={48} />
              <p className="text-xl font-semibold">Thanks for reaching out!</p>
              <p className="text-muted-foreground mt-2">
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
