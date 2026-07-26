import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/StyleApps";

const AudioBookPlayer = ({ text }) => {
  const [status, setStatus] = useState("idle");
  const [boundary, setBoundary] = useState({ charIndex: 0, charLength: 0 });

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const handlePlay = () => {
    if (status === "paused") {
      Speech.resume();
      setStatus("playing");
      return;
    }

    setStatus("playing");
    Speech.speak(text, {
      language: "id-ID",
      pitch: 1.0,
      rate: 0.95,
      onBoundary: (event) => {
        setBoundary({
          charIndex: event.charIndex,
          charLength: event.charLength,
        });
      },
      onDone: () => {
        setStatus("idle");
        setBoundary({ charIndex: 0, charLength: 0 });
      },
      onStopped: () => {
        setStatus("idle");
        setBoundary({ charIndex: 0, charLength: 0 });
      },
      onError: () => {
        setStatus("idle");
      },
    });
  };

  const handlePause = () => {
    Speech.pause();
    setStatus("paused");
  };

  const handleStop = () => {
    Speech.stop();
    setStatus("idle");
    setBoundary({ charIndex: 0, charLength: 0 });
  };

  const renderHighlightedText = () => {
    if (status === "idle" || boundary.charLength === 0) {
      return <Text style={{ color: "#CBD5E1", fontSize: 15, lineHeight: 24 }}>{text}</Text>;
    }

    const before = text.slice(0, boundary.charIndex);
    const current = text.slice(
      boundary.charIndex,
      boundary.charIndex + boundary.charLength
    );
    const after = text.slice(boundary.charIndex + boundary.charLength);

    return (
      <Text style={{ fontSize: 15, lineHeight: 24 }}>
        <Text style={{ color: "#CBD5E1" }}>{before}</Text>
        <Text
          style={{
            color: "#1a2228",
            backgroundColor: color_list.orange,
            fontWeight: "bold",
          }}
        >
          {current}
        </Text>
        <Text style={{ color: "#CBD5E1" }}>{after}</Text>
      </Text>
    );
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#232d36",
          borderRadius: 16,
          padding: 16,
          marginBottom: 16,
        }}
      >
        {status === "playing" ? (
          <TouchableOpacity
            onPress={handlePause}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: color_list.orange,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="pause" size={22} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handlePlay}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: color_list.orange,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="play" size={22} color="#fff" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={handleStop}
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: "#3a4650",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 12,
          }}
        >
          <Ionicons name="stop" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: "#CBD5E1", marginLeft: 14, fontSize: 13 }}>
          {status === "playing"
            ? "Sedang membaca..."
            : status === "paused"
            ? "Dijeda"
            : "Audio-Book"}
        </Text>
      </View>

      {renderHighlightedText()}
    </View>
  );
};

export default AudioBookPlayer;